const Dashboard = {
  async render() {
    return `
      <div class="dashboard-header">
        <h4>Dashboard <span>/ Device Location</span></h4>
      </div>
<div class="summary-cards">
  <div class="summary-card">
    <img src="icons/heartbeat.png" alt="heartbeat" class="icon-summary" />
    Total Devices <h2>80</h2>
  </div>
  <div class="summary-card">
    <img src="icons/param.png" alt="param report" class="icon-summary" />
    Selected Device <h2>80</h2>
  </div>
  <div class="summary-card">
    <img src="icons/regis.png" alt="registration" class="icon-summary" />
    Voltage <h2>80</h2>
  </div>
  <div class="summary-card">
    <img src="icons/total.png" alt="total message" class="icon-summary" />
    Battery <h2>240</h2>
  </div>  <div class="summary-card">
    <img src="icons/total.png" alt="total message" class="icon-summary" />
    Last Update <h2>240</h2>
  </div>
    <div class="summary-card">
    <img src="icons/total.png" alt="total message" class="icon-summary" />
    Status <h2>240</h2>
  </div>
  </div>
  <br>
  <div class="data-toggle">
  <span id="tab-table" class="tab active">Tabel Data </span>
  <span id="atau" class="atau">/ </span>
  <span id="tab-graphic" class="tab">Graphic Data</span>
</div>
<br>

</div>


      <div id="data-table-section" class="table-responsive mt-4">
        <div class="judul">
          <div class="judul"> Device IMEI </div>
          <div class="start"> Start Date </div>
          <div class="end"> End Date </div>
        </div>
        <div id="graphic-section" class="data-section mt-4" style="display: none;">
  <h5>Graphic Data</h5>
  <p>Visualisasi data akan ditampilkan di sini.</p>
  <!-- Tambahkan chart atau visualisasi sesuai kebutuhan -->
</div>

        <div class="filters">
          <select>
            <option>All Message Type</option>
          </select>
          <div class="date-group">
          <input type="date" value="" />
          <input type="date" value="" />
           </div>
          <button class="btn btn-success">Filter Date</button>
          <button class="btn btn-secondary">Reset Date</button>
          <button class="btn btn-excel">Excel</button>
        </div>

        <div class="table-responsive mt-3">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>No</th>
                <th>message_type</th>
                <th>state</th>
                <th>battery_voltage</th>
                <th>battery_level</th>
                <th>ble_rx_count</th>
                <th>param_16</th>
                <th>param_242</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>Heartbeat</td><td>33800000</td><td>21.8</td><td>100</td><td>1234</td><td>-</td><td>-</td></tr>
              <tr><td>2</td><td>Parameter Report</td><td>33800000</td><td>21.9</td><td>98</td><td>2345</td><td>69840</td><td>-</td></tr>
              <tr><td>3</td><td>Registration</td><td>33800001</td><td>22.0</td><td>95</td><td>4523</td><td>-</td><td>-</td></tr>
              <tr><td>4</td><td>Heartbeat</td><td>33800000</td><td>21.9</td><td>100</td><td>5678</td><td>-</td><td>-</td></tr>
              <tr><td>5</td><td>Registration</td><td>33800001</td><td>22.0</td><td>100</td><td>4567</td><td>-</td><td>-</td></tr>
            </tbody>
          </table>
        </div>

        <div class="pagination">
          <button disabled>&lt;</button>
          <button>3</button>
          <button class="active">4</button>
          <button>5</button>
          <button>&gt;</button>
        </div>
      </div>
    `;
  },

  async afterRender() {
  const tabTable = document.getElementById('tab-table');
  const tabGraphic = document.getElementById('tab-graphic');
  const tableSection = document.getElementById('data-table-section');
  const graphicSection = document.getElementById('graphic-section');

  tabTable.addEventListener('click', () => {
    tabTable.classList.add('active');
    tabGraphic.classList.remove('active');
    tableSection.style.display = 'block';
    graphicSection.style.display = 'none';
  });

  tabGraphic.addEventListener('click', () => {
    tabGraphic.classList.add('active');
    tabTable.classList.remove('active');
    tableSection.style.display = 'none';
    graphicSection.style.display = 'block';
  });
}

};

export default Dashboard;
