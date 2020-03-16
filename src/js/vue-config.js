Vue.component('app-side', {
	data: function(){
        return {
            currentUrl: document.location.href.match(/[^\/]+$/)[0],
            urls: [
                {link:'input-mobile.html',label: 'Car Registration',isLabel: false},
                {link:'auction-listing.html',label: 'Auction Listing',isLabel: false},
                {link:'base-price.html',label: 'Determine Basic Price',isLabel: false},
                {link:'kalkulasi-harga.html',label: 'Auction Result',isLabel: false},
                {link:'track-car.html',label: 'Track Your Car',isLabel: false},
                {link:'market-auction.html',label: 'Market Auction Price',isLabel: true},
                {link:'sample.html',label: 'SAMPLE CRUD',isLabel: false},
            ],
        }
    },
	template: `
		<div class="side">
			<div class="text-center border-bottom pt-2 pb-2">
				<img src="./assets/img/ibid.png" style="width:71px;" alt=""/>
			</div>
			<!-- Start User -->
			<div class="user">
				<img src="./assets/img/user.jpg" alt="" />
				<h6 class="name">
					Jhon Doe
					<small class="d-block">PT Toyota Astra Finance</small>
				</h6>
				<ul class="links">
					<li><a href="#"><i data-feather="book-open" class="icon"></i></a></li>
					<li><a href="#"><i data-feather="bell" class="icon"></i></a></li>
				</ul>
			</div>
			<!-- End User -->

			<!-- Start Counter -->
			<div class="counter">
				<div class="row">
					<div class="col border-right border-bottom">
						<h4 class="mb-0">12</h4>
						<p class="mb-0">Registered</p>
						<a href="#" class="link"></a>
						<span class="view"><i data-feather="user-check" class="icon"></i></span>
					</div>
					<div class="col  border-right border-bottom">
						<h4 class="mb-0">8</h4>
						<p class="mb-0">On Pool</p>
						<a href="#" class="link"></a>
						<span class="view"><i data-feather="map-pin" class="icon"></i></span>
					</div>
					<div class="col border-bottom">
						<h4 class="mb-0">24</h4>
						<p class="mb-0">Inspected</p>
						<a href="#" class="link"></a>
						<span class="view"><i data-feather="check-circle" class="icon"></i></span>
					</div>
					
				</div>
				<div class="row">
					<div class="col border-right">
						<h4 class="mb-0">11</h4>
						<p class="mb-0">Waiting For Auction</p>
						<a href="#" class="link"></a>
						<span class="view"><i data-feather="clock" class="icon"></i></span>
					</div>
					<div class="col border-right">
						<h4 class="mb-0">12</h4>
						<p class="mb-0">Auctioned</p>
						<a href="#" class="link"></a>
						<span class="view"><i data-feather="bookmark" class="icon"></i></span>
					</div>
					<div class="col">
						<h4 class="mb-0">23</h4>
						<p class="mb-0">Payment Settlement</p>
						<a href="#" class="link"></a>
						<span class="view"><i data-feather="credit-card" class="icon"></i></span>
					</div>
				</div>
			</div>
			<!-- End Counter -->

			<!-- Start Menus -->
			<div class="menus">
				<h5>Menus</h5>
				<ul>
					<li v-for="url in urls" v-bind:class="{ active: url.link == currentUrl }">
						<small v-if="url.isLabel" class="attr">Premium</small>
						<a v-bind:href="url.link">{{url.label}}</a>
					</li>
				</ul>
			</div>
			<!-- End Menus -->
		</div>
	`
});

Vue.component('app-header', {
	methods: {
		logout: function(){
			localStorage.removeItem("token");
			window.location.replace("./");
		}
	},
	template: `
		<div>
			<!-- Start Mobile Header -->
			<div class="header-mobile">
				<h6 class="title">Sourcing management system</h6>
				<button class="toggle-header"><i data-feather="menu" class="icon"></i></button>
			</div>
			<!-- End Mobile Header -->

			<!-- Start Header -->
			<div class="header">
				<div class="clearfix"></div>
				<div class="row">
					<div class="col-8">
						<!-- Start Search -->
						<div class="input-group">
							<div class="input-group-prepend">
								<span class="input-group-text">
									<i data-feather="search" class="icon"></i>
								</span>
							</div>
							<input type="text" class="form-control" placeholder="Search..." aria-label="Username" aria-describedby="basic-addon1">
						</div>  
						<!-- End Search -->
					</div>
					<div class="col-4 text-right">
						<button class="btn toggle-logout" v-on:click="logout"><i data-feather="log-out" class="icon"></i> <span>Logout</span></button>
					</div>
				</div>
			</div>
			<!-- End Header -->
		</div>
	`
});


Vue.component('spinner-loading', {
	template: `<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>`
});
