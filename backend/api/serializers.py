from rest_framework import serializers
from .models import Track, Album, AlbumTrack


class AlbumSerializer(serializers.ModelSerializer):
    class Meta:
        model = Album
        fields = '__all__'


class TrackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Track
        fields = '__all__'


class AlbumTrackSerializer(serializers.ModelSerializer):
    class Meta:
        model = AlbumTrack
        fields = '__all__'
