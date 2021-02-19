from uuid import uuid4
from django.db import models


def file_upload_path(instance, filename):
    return f'documents/{uuid4()}_{filename}'

def thumbnail_path(instance, filename):
    return f'thumbnails/{uuid4()}_{filename}'


class Document(models.Model):
    name = models.TextField(max_length=100)
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
        return f'Document({self.name})'
