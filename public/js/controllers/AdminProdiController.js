function AdminProdiBacaKaryawan($scope, $http) {

	$scope.modal_tambah_karyawan = function() {
		$('.modal').load(url_admin_prodi_modal_tambah_karyawan , function() {
			$('.modal').modal('show');		
		});
	}

	$scope.modal_detail_karyawan = function(id){
		 $('.modal').load(url_admin_prodi_modal_detail_karyawan , function() {
		 	$('.modal').modal('show');
		 });
	}

	$scope.modal_ubah_karyawan = function(id) {
		$('.modal').load(url_admin_prodi_modal_ubah_karyawan , function() {
			$('.modal').modal('show');
		});
	}

	$scope.modal_hapus_karyawan = function(id) {
		$('.modal').load(url_admin_prodi_modal_hapus_karyawan , function() {
			$('.modal').modal('show');
		});
	}

}
	
function AdminProdiBacaPenelitianDosen($scope, $http){

		$http.get('admin_prodi/baca/penelitian_dosen').success(function(data_pd) {
			$scope.data_dosen_penelitian = data_pd;
		});

		$scope.modal_tambah_penelitian_dosen = function() {
		$('.modal').load(url_admin_prodi_modal_tambah_penelitian_dosen , function() {
			$('.modal').modal('show');		
		});
	}

		$scope.modal_detail_penelitian_dosen = function(id_dosen_penelitian){
		 $('.modal').load(url_admin_prodi_modal_detail_penelitian_dosen + '?id_dosen_penelitian=' + id_dosen_penelitian , function() {
		 	$('.modal').modal('show');
		 });
	}

		$scope.modal_ubah_penelitian_dosen = function(id_dosen_penelitian) {
			// alert(id_dosen_penelitian);
		$('.modal').load(url_admin_prodi_modal_ubah_penelitian_dosen + '?id_dosen_penelitian=' + id_dosen_penelitian , function() {
			$('.modal').modal('show');
		});
	}

		$scope.modal_hapus_penelitian_dosen = function(id_dosen_penelitian) {
		$('.modal').load(url_admin_prodi_modal_hapus_penelitian_dosen + '?id_dosen_penelitian=' + id_dosen_penelitian, function() {
			$('.modal').modal('show');
		});
	}
}

function AdminProdiBacaPengabdianDosen($scope, $http){

		$http.get('/public/admin_prodi/baca/admin_prodi_pengabdian').success(function(data_pen) {
		$scope.data_pengabdian = data_pen;
	});

		$scope.modal_tambah_pengabdian_dosen = function() {
		$('.modal').load(url_admin_prodi_modal_tambah_pengabdian_dosen , function() {
			$('.modal').modal('show');		
		});
	}

		$scope.modal_detail_pengabdian_dosen = function(id){
		 $('.modal').load(url_admin_prodi_modal_detail_pengabdian_dosen , function() {
		 	$('.modal').modal('show');
		 });
	}

		$scope.modal_ubah_pengabdian_dosen = function(id_dosen_pengabdian) {
		$('.modal').load(url_admin_prodi_modal_ubah_pengabdian_dosen + '?id_dosen_pengabdian=' + id_dosen_pengabdian, function() {
			$('.modal').modal('show');
		});
	}

		$scope.modal_hapus_pengabdian_dosen = function(id) {
		$('.modal').load(url_admin_prodi_modal_hapus_pengabdian_dosen , function() {
			$('.modal').modal('show');
		});
	}

	$scope.modal_hapus_pengabdian_dosen = function(id_dosen_pengabdian) {
		$('.modal').load(url_admin_prodi_modal_hapus_pengabdian_dosen + '?id_dosen_pengabdian=' + id_dosen_pengabdian, function() {
			$('.modal').modal('show');
		});
	}
}
