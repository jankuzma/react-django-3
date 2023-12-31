# Generated by Django 4.2.4 on 2023-08-15 18:46

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_rename_name_track_title'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='album',
            name='author',
        ),
        migrations.AlterField(
            model_name='albumtrack',
            name='track',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.track'),
        ),
        migrations.AlterField(
            model_name='track',
            name='author',
            field=models.CharField(default='unknown', max_length=256),
        ),
        migrations.DeleteModel(
            name='Author',
        ),
    ]
