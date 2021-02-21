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

    @property
    def url(self):
        return self.file.url

    @property
    def preview(self):
        return self.thumbnail.url

    def __str__(self):
        return f'{self.name}'
