const DeviceLocation = {
  async render() {
    return `
      <div class="device-location-page">
        <h2 class="mb-4">Device Location</h2>
        <div id="map" class="map-container"></div>
      </div>
    `;
  },

  async afterRender() {
    // Import Leaflet setelah DOM tersedia
    const L = await import('leaflet');

    // Cek jika sudah ada map sebelumnya (untuk SPA navigation)
    if (window._leafletMap) {
      window._leafletMap.remove();
    }

    // Koordinat pusat peta
    const center = [-6.2, 106.816666];

    // Inisialisasi peta
    const map = L.map('map').setView(center, 13);
    window._leafletMap = map; // simpan agar bisa dihapus saat navigasi

    // Tambahkan tile layer dari OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    // Tambahkan marker
    L.marker(center).addTo(map)
      .bindPopup('Perangkat berada di lokasi ini.')
      .openPopup();
  }
};

export default DeviceLocation;
