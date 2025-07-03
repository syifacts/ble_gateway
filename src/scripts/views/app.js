import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({ content }) {
    this._content = content;
    this._initialAppShell();
  }

  _initialAppShell() {
    window.addEventListener('hashchange', () => this.renderPage());
    window.addEventListener('load', () => this.renderPage());
  }
_updateNavigation(currentUrl = '') {
  const nav = document.getElementById('navigationDrawer');
  if (!nav) return;

  nav.innerHTML = `
    <div class="topbar">
     <div class="topbar-left">
      <h2>BLE <br> Gateway</h2>
      <div class="topbar-center">
      <ul>
        <li><a href="#/dashboard" class="nav-link">Dashboard</a></li>
        <li><a href="#/device-location" class="nav-link">Device Location</a></li>
        <li><a href="#/device-management" class="nav-link">Device Management</a></li>
      </ul>
    </div>
    </div>
  `;

  const links = nav.querySelectorAll('.nav-link');
  links.forEach(link => {
    const href = link.getAttribute('href')?.replace('#', '');
    if (href === currentUrl) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}



  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];

    if (!page) {
      this._content.innerHTML = `<p style="padding: 2rem;">Halaman tidak ditemukan.</p>`;
      return;
    }

    this._content.innerHTML = await page.render();
    await page.afterRender?.();

    this._updateNavigation(url);
  }
}

export default App;
