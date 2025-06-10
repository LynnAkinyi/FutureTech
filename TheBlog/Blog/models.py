from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

class UserRole(models.Model):
    USER_ROLES = (
        ('ADMIN', 'Administrator'),
        ('EXPERT', 'Expert Contributor'),
        ('READER', 'Reader')
    )
    
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    role = models.CharField(max_length=10, choices=USER_ROLES, default='READER')
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']
        verbose_name = 'User Role'
        verbose_name_plural = 'User Roles'

    def __str__(self):
        return f"{self.user.username} - {self.get_role_display()}"

    def is_admin(self):
        return self.role == 'ADMIN'
    
    def is_expert(self):
        return self.role == 'EXPERT'
    
    def is_reader(self):
        return self.role == 'READER'

    def clean(self):
        from django.core.exceptions import ValidationError
        if self.user.is_superuser and self.role != 'ADMIN':
            raise ValidationError('Superuser must have Admin role')