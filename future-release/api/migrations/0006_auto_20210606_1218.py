# Generated by Django 3.1.4 on 2021-06-06 06:48

import api.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_auto_20210528_1632'),
    ]

    operations = [
        migrations.AlterField(
            model_name='room',
            name='code',
            field=models.CharField(default=api.models.generate_unique_code, max_length=200, unique=True),
        ),
    ]
