# Generated by Django 2.2.28 on 2023-08-23 22:02

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Project_info',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('company', models.CharField(max_length=255)),
                ('project_name', models.CharField(max_length=255)),
            ],
        ),
    ]