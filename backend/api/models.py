import datetime

from django.db import models

class Track(models.Model):
    title = models.CharField(max_length=256, null=True)
    author = models.CharField(max_length=256, default='unknown')
    audio_file = models.FileField(upload_to='tracks/', null=True)
    date_of_upload = models.DateTimeField(default=datetime.datetime.now)


class Album(models.Model):
    name = models.CharField(max_length=256)
    date_of_release = models.DateField(null=True)


class AlbumTrack(models.Model):
    track = models.ForeignKey(Track, on_delete=models.CASCADE)
    album = models.ForeignKey(Album, on_delete=models.CASCADE)
