// Define a new component called button-counter
Vue.component('nav-component', {
  data: function () {
    return {
      count: 0
    }
  },
  template: 
    "<nav id='nav' class='navbar navbar-fixed-top' data-spy='affix'><div><div class='navbar-header'><a href='#' class='navbar-brand'><img src='assets/images/logo.png' class='App-logo d-inline-block align-top' alt='logo' /></a><a class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'><i class='fa fa-bars'></i></a></div><div class='navbar-collapse collapse'><ul class='nav navbar-nav'><li><a href='#'>Link</a></li></ul><ul class='nav pull-right navbar-nav'><li><a href='#'>Link</a></li></ul></div></div></nav>"
})


Vue.component("button-component", {
  props: ["nbutton"]
})


// Define a new component called button-counter
Vue.component('slide-one-home', {
	props: ['title', 'subtitle'],
    template: 
 		`
		<div class="slide-one-home">
			<section class="App-slide1" id="slide1">
			  <div class="home-slide container-fluid">
			      <div class="row">
			        <div class="col-lg-6" id="left-pane"></div>
			        <div class="col-lg-6 slide1" id="right-pane">
			          <div class="card" style="width: 100%;">
			            <div class="card-body">
			              <h2 class="card-title">{{title}}</h2>
			              <p class="card-text">{{subtitle}}</p>
			            </div>
			            <ul class="list-group list-group-flush">
			              <li class="list-group-item">Bring separated families home and end family separations.</li>
			              <li class="list-group-item">We need more, not fewer immigrants.</li>
			              <li class="list-group-item">Celebrate the road to citizenship, making it easiser for immigrants to become citizens.</li>
			            </ul>
			            <div class="card-body">
			               
			             </div>
			          </div>

			        </div>
			      </div>
			      <div class="row">
			        <div class="col-lg-10 col-lg-offset-1 logo-svg-container">
			        	<svg width="992px" height="91px" viewBox="0 0 992 91" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
			        	    <!-- Generator: Sketch 46.2 (44496) - http://www.bohemiancoding.com/sketch -->
			        	    <defs>
			        	        <filter x="-5.1%" y="-63.8%" width="110.2%" height="227.6%" filterUnits="objectBoundingBox" id="filter-1">
			        	            <feGaussianBlur stdDeviation="1" in="SourceGraphic"></feGaussianBlur>
			        	        </filter>
			        	        <filter x="-5.1%" y="-43.8%" width="110.3%" height="187.5%" filterUnits="objectBoundingBox" id="filter-2">
			        	            <feGaussianBlur stdDeviation="1" in="SourceGraphic"></feGaussianBlur>
			        	        </filter>
			        	        <filter x="-4.7%" y="-17.5%" width="109.3%" height="135.0%" filterUnits="objectBoundingBox" id="filter-3">
			        	            <feGaussianBlur stdDeviation="1" in="SourceGraphic"></feGaussianBlur>
			        	        </filter>
			        	        <filter x="-5.3%" y="-22.6%" width="110.6%" height="145.3%" filterUnits="objectBoundingBox" id="filter-4">
			        	            <feGaussianBlur stdDeviation="1" in="SourceGraphic"></feGaussianBlur>
			        	        </filter>
			        	        <filter x="-6.2%" y="-36.8%" width="112.5%" height="173.7%" filterUnits="objectBoundingBox" id="filter-5">
			        	            <feGaussianBlur stdDeviation="1" in="SourceGraphic"></feGaussianBlur>
			        	        </filter>
			        	    </defs>
			        	    <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
			        	        <g id="roadmap" stroke="#F9F9F9" stroke-width="8">
			        	            <path d="M383.055562,47.97305 C400.45655,39.5372536 416.313585,35.9653734 430.626667,37.2574094 C438.073054,37.9295916 467.864165,40.8330365 520,45.9677441" id="Line" stroke-linecap="square" filter="url(#filter-1)"></path>
			        	            <circle id="Oval1" cx="150" cy="51" r="25" stroke="#F7CB15"></circle>
			        	            <circle id="Oval2" cx="349" cy="35" r="25"></circle>
			        	            <circle id="Oval3" cx="560" cy="45" r="25"></circle>
			        	            <circle id="Oval4" cx="779" cy="34" r="25"></circle>
			        	            <path d="M185,38.5810481 C193.936973,35.9443323 218.420252,27.5272401 230.198284,30.7077566 C237.076574,32.5651566 253.046816,44.1433367 280,45.9265179 C288.180679,46.467739 301.847345,44.0192491 321,38.5810481" id="Path-3" filter="url(#filter-2)"></path>
			        	            <path d="M597,45.8839627 C620.61329,56.0865638 634.333449,72.3732336 662,69.7099068 C679.492873,68.0259515 705.67993,53.3580676 719,45.8839627 L747,30" id="Path-4" filter="url(#filter-3)"></path>
			        	            <path d="M813,20 C825.003832,10.9151962 849.337165,14.8114541 886,31.6887739 C929.988854,42.382387 949.655521,47.1527957 945,46" id="Path-5" filter="url(#filter-4)"></path>
			        	            <path d="M5,38.0815831 C38.3126666,20.4087635 42.0890342,40.4525433 69.6665819,48.1032882 C81.6508118,51.4280321 112.08013,49.3814472 117,49.3300708" id="Path-2" filter="url(#filter-5)"></path>
			        	        </g>
			        	    </g>
			        	</svg>
			        </div>
			      </div>
			  </div>
			</section> 
		</div> 
		`
})

Vue.component('slide-two-component'), {
	template: 
		`
		<div class="slide-two">
		  <section class="App-slide2" id="slide2">
		    <div class="home-slide container-fluid">
		        <div class="row">
		          <div class="col-lg-6" id="left-pane"></div>
		          <div class="col-lg-6 slide1" id="right-pane">
		            <div class="card" style="width: 100%;">
		              <div class="card-body">
		                <h2 class="card-title">We are fighting for a diverse and inclusive future that</h2>
		                
		              </div>
		              <ul class="list-group list-group-flush">
		                <li class="list-group-item">Provide citizenship for 11 million</li>
		                <li class="list-group-item">Strengthening  and protecting all families – family unity drives migration and we should have systems in place to protect that.</li>
		                <li class="list-group-item">Establish border policy that protects border communities and diversity</li>
		                <li class="list-group-item">Establish opportunities for safe future migration and maintaining worker protections.</li>
		              </ul>
		              <div class="card-body">
		                 
		               </div>
		            </div>

		          </div>
		        </div>
		        <div class="row">
		          <div class="col-lg-10 col-lg-offset-1 logo-svg-container">
		            <svg width="992px" height="91px" viewBox="0 0 992 91" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
		                <!-- Generator: Sketch 46.2 (44496) - http://www.bohemiancoding.com/sketch -->
		                <defs>
		                    <filter x="-5.1%" y="-63.8%" width="110.2%" height="227.6%" filterUnits="objectBoundingBox" id="filter-1">
		                        <feGaussianBlur stdDeviation="1" in="SourceGraphic"></feGaussianBlur>
		                    </filter>
		                    <filter x="-5.1%" y="-43.8%" width="110.3%" height="187.5%" filterUnits="objectBoundingBox" id="filter-2">
		                        <feGaussianBlur stdDeviation="1" in="SourceGraphic"></feGaussianBlur>
		                    </filter>
		                    <filter x="-4.7%" y="-17.5%" width="109.3%" height="135.0%" filterUnits="objectBoundingBox" id="filter-3">
		                        <feGaussianBlur stdDeviation="1" in="SourceGraphic"></feGaussianBlur>
		                    </filter>
		                    <filter x="-5.3%" y="-22.6%" width="110.6%" height="145.3%" filterUnits="objectBoundingBox" id="filter-4">
		                        <feGaussianBlur stdDeviation="1" in="SourceGraphic"></feGaussianBlur>
		                    </filter>
		                    <filter x="-6.2%" y="-36.8%" width="112.5%" height="173.7%" filterUnits="objectBoundingBox" id="filter-5">
		                        <feGaussianBlur stdDeviation="1" in="SourceGraphic"></feGaussianBlur>
		                    </filter>
		                </defs>
		                <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
		                    <g id="roadmap" stroke="#F9F9F9" stroke-width="8">
		                        <path d="M383.055562,47.97305 C400.45655,39.5372536 416.313585,35.9653734 430.626667,37.2574094 C438.073054,37.9295916 467.864165,40.8330365 520,45.9677441" id="Line" stroke-linecap="square" filter="url(#filter-1)"></path>
		                        <circle id="Oval1" cx="150" cy="51" r="25"></circle>
		                        <circle id="Oval2" cx="349" cy="35" r="25" stroke="#F7CB15"></circle>
		                        <circle id="Oval3" cx="560" cy="45" r="25"></circle>
		                        <circle id="Oval4" cx="779" cy="34" r="25"></circle>
		                        <path d="M185,38.5810481 C193.936973,35.9443323 218.420252,27.5272401 230.198284,30.7077566 C237.076574,32.5651566 253.046816,44.1433367 280,45.9265179 C288.180679,46.467739 301.847345,44.0192491 321,38.5810481" id="Path-3" filter="url(#filter-2)"></path>
		                        <path d="M597,45.8839627 C620.61329,56.0865638 634.333449,72.3732336 662,69.7099068 C679.492873,68.0259515 705.67993,53.3580676 719,45.8839627 L747,30" id="Path-4" filter="url(#filter-3)"></path>
		                        <path d="M813,20 C825.003832,10.9151962 849.337165,14.8114541 886,31.6887739 C929.988854,42.382387 949.655521,47.1527957 945,46" id="Path-5" filter="url(#filter-4)"></path>
		                        <path d="M5,38.0815831 C38.3126666,20.4087635 42.0890342,40.4525433 69.6665819,48.1032882 C81.6508118,51.4280321 112.08013,49.3814472 117,49.3300708" id="Path-2" filter="url(#filter-5)"></path>
		                    </g>
		                </g>
		            </svg>
		          </div>
		        </div>
		    </div>
		  </section> 
		</div> 

		`

}


new Vue({ 
  el: '#FirmaApp',
  data: {
  	cards: [
  		{
  			id: 1, 
  			title: 'FIRM is fighting for an America that is United, Strong, and Free.',
  			subtitle: 'Our Values in Action:',
  			listcontent: [	'Bring separated families home and end family separations.',
  							'We need more, not fewer immigrants.',
  							'Celebrate the road to citizenship, making it easiser for immigrants to become citizens.'
  						],
  				
  		}

  	]
  }
});

