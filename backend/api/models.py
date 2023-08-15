import datetime

from django.db import models




class Author(models.Model):
    name = models.CharField(max_length=128)
    surname = models.CharField(max_length=128)


class Track(models.Model):
    author = models.ForeignKey(Author, on_delete=models.CASCADE, null=True)
    audio_file = models.FileField(upload_to='tracks/', null=True)
    date_of_upload = models.DateTimeField(default=datetime.datetime.now )


class Album(models.Model):
    name = models.CharField(max_length=256)
    author = models.ForeignKey(Author, on_delete=models.CASCADE, null=True)
    date_of_release = models.DateField(null=True)


class AlbumTrack(models.Model):
    track = models.ForeignKey(Author, on_delete=models.CASCADE)
    album = models.ForeignKey(Album, on_delete=models.CASCADE)