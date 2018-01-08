<template>

        
        <div id="app">
            <div class="wrapper">

                    <nav id="sidebar">
                        <div id="dismiss">
                           <button type="button" class="btn btn-success">X</button>
                       </div>
                        <!-- Sidebar Header -->
                        <div class="sidebar-header">
                            
                        </div>

                        <!-- Sidebar Links -->
                        <ul class="list-unstyled components">
                            <li class="active"><a href="#">Home</a></li>
                            <li><a href="#" @click="logout">Logout</a></li>
                        </ul>
                    </nav>

                    <div id="content">
                        
                        <button type="button" id="sidebarCollapse" class="btn btn-primary btn-lg btn-block" @click='toggleSidebar'>
                            <i class="glyphicon glyphicon-align-left"></i>
                            Full Menu
                        </button>
                        <div class="container">
                            <img src="./assets/notepad.jpeg">
                            <router-view/>
                        </div>
                    </div>
                 <div class="overlay"></div>    
            </div>
          
          
        </div>

 
</template>

<script>

export default {
  name: 'app',
  methods:{
      toggleSidebar(){
          $('#sidebar').addClass('active');
          $('.overlay').fadeIn();
          // close dropdowns
          
          $('.collapse.in').toggleClass('in');
          // and also adjust aria-expanded attributes we use for the open/closed arrows
          // in our CSS
          $('a[aria-expanded=true]').attr('aria-expanded', 'false');

          
      },
      scrollBar(){
          $("#sidebar").mCustomScrollbar({
                theme: "minimal"
            });
            
            
            $('#dismiss, .overlay').on('click', function () {
            // hide the sidebar
            $('#sidebar').removeClass('active');
            // fade out the overlay
            $('.overlay').fadeOut();
          });
      },
      logout(){
          localStorage.removeItem('jwtToken')
          location.reload()
      }
    },
  mounted(){
      this.scrollBar()
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.overlay {
    /* full screen */
    width: 100vw;
    height: 100vh;
    /* transparent black */
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    top: 0;
    left: 0;
    display: none;
    /* middle layer, i.e. appears below the sidebar */
    z-index: 9998;
}

#dismiss {
    width: 35px;
    height: 35px;
    position: absolute;
    /* top right corner of the sidebar */
    top: 10px;
    right: 10px;
}
.wrapper {
  display: block;
}          


#sidebar.active {
    margin-left: 0;
}
a[data-toggle="collapse"] {
    position: relative;
}

a[aria-expanded="false"]::before, a[aria-expanded="true"]::before {
    content: '\e259';
    display: block;
    position: absolute;
    right: 20px;
    font-family: 'Glyphicons Halflings';
    font-size: 0.6em;
}

a[aria-expanded="true"]::before {
    content: '\e260';
}
@media (max-width: 768px) {
    #sidebar {
        margin-left: -250px;
    }
    #sidebar.active {
        margin-left: 0;
    }
}
body {
    font-family: 'Poppins', sans-serif;
    background: #fafafa;
}

p {
    font-family: 'Poppins', sans-serif;
    font-size: 1.1em;
    font-weight: 300;
    line-height: 1.7em;
    color: #999;
}

a, a:hover, a:focus {
    color: inherit;
    text-decoration: none;
    transition: all 0.3s;
}

#sidebar {
    /* don't forget to add all the previously mentioned styles here too */
    background: #7386D5;
    color: #fff;
    transition: all 0.3s;
    min-width: 250px;
    max-width: 250px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    /* top layer */
    z-index: 9999;
    /*display: none;*/
    margin-left: -250px;
}

#sidebar .sidebar-header {
    padding: 20px;
    background: #6d7fcc;
}

#sidebar ul.components {
    padding: 20px 0;
    border-bottom: 1px solid #47748b;
}

#sidebar ul p {
    color: #fff;
    padding: 10px;
}

#sidebar ul li a {
    padding: 10px;
    font-size: 1.1em;
    display: block;
}
#sidebar ul li a:hover {
    color: #7386D5;
    background: #fff;
}

#sidebar ul li.active > a, a[aria-expanded="true"] {
    color: #fff;
    background: #6d7fcc;
}
ul ul a {
    font-size: 0.9em !important;
    padding-left: 30px !important;
    background: #6d7fcc;
}
</style>
