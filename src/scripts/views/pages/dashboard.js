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
    <div class="summary-card">
    <img src="icons/total.png" alt="total message" class="icon-summary" />
    Last Acitivity <h2>240</h2>
  </div>
</div>


      <div class="data-section mt-4">
        <h5>Data Decoded</h5>
        
        <div class="judul">
          <div class="judul"> Message Type </div>
          <div class="judul"> Start Date </div>
          <div class="judul"> End Date </div>
        </div>
        
        <div class="filters">
          <select>
            <option>All Message Type</option>
          </select>
          <input type="date" value="" />
          <input type="date" value="" />
          <button class="btn btn-success">Filter Date</button>
          <button class="btn btn-secondary">Reset Date</button>
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
    // Tambahkan interaksi jika diperlukan
  }
};

export default Dashboard;
