class NavigationBar extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = `
        <nav class="border-t bg-white">
          <div class="flex items-center justify-around p-4">
            <a href="#" class="nav-item" data-page="dashboard">
              <span class="material-icons">home</span>
              <span>Dashboard</span>
            </a>
            <a href="#" class="nav-item" data-page="log">
              <span class="material-icons">add</span>
              <span>Log</span>
            </a>
            <a href="#" class="nav-item" data-page="analysis">
              <span class="material-icons">bar_chart</span>
              <span>Analysis</span>
            </a>
            <a href="#" class="nav-item" data-page="workouts">
              <span class="material-icons">fitness_center</span>
              <span>Workouts</span>
            </a>
            <a href="#" class="nav-item" data-page="profile">
              <span class="material-icons">person</span>
              <span>Profile</span>
            </a>
          </div>
        </nav>
      `;
  
      this.activePage = 'dashboard'; // Default active page
      this.updateActiveItem();
  
      this.addEventListener('click', (e) => {
        const navItem = e.target.closest('.nav-item');
        if (navItem) {
          e.preventDefault();
          this.setActivePage(navItem.dataset.page);
        }
      });
    }
  
    setActivePage(page) {
      this.activePage = page;
      this.updateActiveItem();
    }
  
    updateActiveItem() {
      this.querySelectorAll('.nav-item').forEach(item => {
        if (item.dataset.page === this.activePage) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
    }
  }
  
  customElements.define('navigation-bar', NavigationBar);