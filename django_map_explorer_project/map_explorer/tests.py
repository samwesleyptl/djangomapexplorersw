from django.test import TestCase
from .models import MapLocation

class MapLocationModelTestCase(TestCase):
    def setUp(self):
        self.location = MapLocation.objects.create(
            name='Sample Location',
            latitude=40.7128,  # Latitude for New York City
            longitude=-74.0060  # Longitude for New York City
        )

    def test_location_creation(self):
        self.assertEqual(self.location.name, 'Sample Location')
        self.assertAlmostEqual(self.location.latitude, 40.7128)
        self.assertAlmostEqual(self.location.longitude, -74.0060)
