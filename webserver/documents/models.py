from uuid import uuid4
from django.db import models


def file_upload_path(instance, filename):
    return f'{uuid4()}_{filename}'


class Document(models.Model):
    name = models.TextField(max_length=100)
    file = models.FileField(upload_to=file_upload_path)

    def __str__(self):
        return f'Document({self.name})'
