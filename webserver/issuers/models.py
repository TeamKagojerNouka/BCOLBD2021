from uuid import uuid4
from django.db import models
from django.contrib.auth import get_user_model


def file_upload_path(instance, filename):
    return f'documents/{uuid4()}_{filename}'

def thumbnail_path(instance, filename):
    return f'thumbnails/{uuid4()}_{filename}'


AuthUser = get_user_model()


class Issuer(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(max_length=500)

    def __str__(self):
        return f'{self.name}'


class Document(models.Model):
    name = models.CharField(max_length=100)
    issuer = models.ForeignKey(to=Issuer, related_name='issued_assets', on_delete=models.PROTECT)
    owner = models.ForeignKey(to=AuthUser, related_name='asset_set', on_delete=models.PROTECT)
    file = models.FileField(upload_to=file_upload_path)
    thumbnail = models.ImageField(upload_to=thumbnail_path)
    created_at = models.DateField(auto_now=True)

    is_signed_by_issuer = models.BooleanField(default=False)
    is_signed_by_owner = models.BooleanField(default=False)
    hash = models.UUIDField(null=True, blank=True)

    @property
    def url(self):
        return self.file.url

    @property
    def preview(self):
        return self.thumbnail.url

    def __str__(self):
        return f'{self.name}'

    def sign_by_issuer(self):
        self.is_signed_by_issuer = True
        self.save()

    def sign_by_owner(self):
        self.is_signed_by_owner = True
        self.hash = uuid4()
        self.save()

    @property
    def is_signed(self):
        return self.is_signed_by_owner and self.is_signed_by_issuer
