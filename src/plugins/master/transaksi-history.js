$(function () {

    /*------------------------------------------
     --------------------------------------------
     Pass Header Token
     --------------------------------------------
     --------------------------------------------*/
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    /*------------------------------------------
    --------------------------------------------
    Render DataTable
    --------------------------------------------
    --------------------------------------------*/
    var table = $('.data-table').DataTable({
        processing: true,
        serverSide: true,
        ajax: "/transaksi/history",
        dom: '<"row"<"col-md-12"<"row"<"col-md-6"B><"col-md-6"f> > ><"col-md-12"rt> <"col-md-12"<"row"<"col-md-5"i><"col-md-7"p>>> >',
        buttons: {
            buttons: [
                // { extend: 'copy', className: 'btn' },
                // { extend: 'csv', className: 'btn' },
                // { extend: 'excel', className: 'btn' },
                { extend: 'print', className: 'btn' }
            ]
        },
        "oLanguage": {
            "oPaginate": { "sPrevious": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>', "sNext": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>' },
            "sInfo": "Showing page _PAGE_ of _PAGES_",
            "sSearch": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>',
            "sSearchPlaceholder": "Search...",
            "sLengthMenu": "Results :  _MENU_",
        },
        "stripeClasses": [],
        "lengthMenu": [7, 10, 20, 50, 100],
        "pageLength": 7,

        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
            { data: 'created_at', name: 'created_at' },
            { data: 'barang.nama', name: 'barang.nama' },
            { data: 'barang.unit', name: 'barang.unit' },
            { data: 'masuk', name: 'masuk' },
            { data: 'keluar', name: 'keluar' },
            { data: 'stock', name: 'stock' },
            { data: 'dariproject.nama', name: 'dariproject.nama' },
            { data: 'keproject.nama', name: 'keproject.nama' },
            { data: 'keterangan', name: 'keterangan' },
            { data: 'remark', name: 'remark' },
            { data: 'action', name: 'action', orderable: false, searchable: false },
        ]
    });
    var table1 = $('.data-tableuser').DataTable({
        processing: true,
        serverSide: true,
        ajax: "/transaksi/history",
        dom: '<"row"<"col-md-12"<"row"<"col-md-6"B><"col-md-6"f> > ><"col-md-12"rt> <"col-md-12"<"row"<"col-md-5"i><"col-md-7"p>>> >',
        buttons: {
            buttons: [
                // { extend: 'copy', className: 'btn' },
                // { extend: 'csv', className: 'btn' },
                // { extend: 'excel', className: 'btn' },
                { extend: 'print', className: 'btn' }
            ]
        },
        "oLanguage": {
            "oPaginate": { "sPrevious": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>', "sNext": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>' },
            "sInfo": "Showing page _PAGE_ of _PAGES_",
            "sSearch": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>',
            "sSearchPlaceholder": "Search...",
            "sLengthMenu": "Results :  _MENU_",
        },
        "stripeClasses": [],
        "lengthMenu": [7, 10, 20, 50, 100],
        "pageLength": 7,

        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
            { data: 'created_at', name: 'created_at' },
            { data: 'barang.nama', name: 'barang.nama' },
            { data: 'barang.unit', name: 'barang.unit' },
            { data: 'masuk', name: 'masuk' },
            { data: 'keluar', name: 'keluar' },
            { data: 'stock', name: 'stock' },
            { data: 'dariproject.nama', name: 'dariproject.nama' },
            { data: 'keproject.nama', name: 'keproject.nama' },
            { data: 'keterangan', name: 'keterangan' },
            { data: 'remark', name: 'remark' },
            // { data: 'action', name: 'action', orderable: false, searchable: false },
        ]
    });

    /*------------------------------------------
    --------------------------------------------
    Click to Button
    --------------------------------------------
    --------------------------------------------*/
    $('#btnShowFormMaster').click(function () {
        $('#btnCreate').val("Create");
        $('#id').val('');
        $('#id_barang').val('');
        $('#addTransaksi').trigger("reset");
        $('#title').html("Create New Transaksi");
        $('#modalTambahData').modal('show');

        $('#id_barang').on('change', function () {
            id_barang = document.getElementById('id_barang').value;
            // console.log(id_barang);
        });

        $('#dari').on('change', function () {  
            // console.log(this.value);
            $.ajax({
                url: "/transaksi/fetch",
                type: "POST",
                data: {
                    id_project: this.value,
                },
                dataType: 'json',
                success: function (result) {
                    $('#id_barang').html('<option value="" selected>Select</option>');
                    const selected = document.getElementById('dari').value;
                    if (selected == '') {
                        $.each(result.barang, function (key, value) {
                            if (id_barang == value.id) {
                                isselected = 'selected';
                            } else {
                                isselected = '';
                            }
                            $("#id_barang").append(
                                '<option name="id_barang" value="' + value
                                    .id + '"' + isselected + '>' + value.nama +
                                '</option>');
                        });
                    } else {
                        $.each(result.barang, function (key, value) {
                            if (id_barang == value.id_barang) {
                                isselected = 'selected';
                            } else {
                                isselected = '';
                            }
                            $("#id_barang").append(
                                '<option name="id_barang" value="' + value
                                    .id_barang + '"' + isselected + '>' + value.barang.nama +
                                '</option>');
                        });
                    }
                }
            });
        });

        // Select Option Barang 
        $.ajax({
            url: "/transaksi/fetch",
            type: "POST",
            data: {               
            },
            dataType: 'json',
            success: function (result) {
                $('#id_barang').html(
                    '<option value="" selected>Select</option>');
               
                    $.each(result.barang, function (key, value) {
                        if (id_barang == value.id) {
                            isselected = 'selected';
                        } else {
                            isselected = '';
                        }
                        $("#id_barang").append(
                            '<option name="id_barang" value="' + value
                                .id + '"' + isselected + '>' + value.nama +
                            '</option>');
                    });
            }
        });
        

        // Select Option 'dari'
        $.ajax({
            url: "/transaksi/fetch/project",
            type: "POST",
            data: {                
            },
            dataType: 'json',
            success: function (result) {
                $('#dari').html('<option value="" selected>None</option>');            
                $.each(result, function (key, value) {
                    // if (data.dari == value.id_project) {
                    //     isselected = 'selected';
                    // } else {
                    //     isselected = '';
                    // }
                    $("#dari").append(
                        '<option value="' + value.id + '"'
                        //  + isselected 
                        + '>' + value.nama + '</option>');
                });
            }
        });

    });

    /*------------------------------------------
    --------------------------------------------
    Click to Edit Button
    --------------------------------------------
    --------------------------------------------*/
    $('body').on('click', '.editTransaksi', function () {
        var id = $(this).data('id');
        $.get("/transaksi" + '/' + id + '/edit', function (data) {
            // Select Option Barang 
            $.ajax({
                url: "/transaksi/fetch",
                type: "POST",
                data: {
                    id_project: data.dari,
                    id_barang: data.id_barang,
                },
                dataType: 'json',
                success: function (result) {
                    $('#id_barang').html(
                        '<option value="" selected>Select</option>');
                    if (data.dari == null) {
                        $.each(result.barang, function (key, value) {
                            if (data.id_barang == value.id) {
                                isselected = 'selected';
                            } else {
                                isselected = '';
                            }
                            $("#id_barang").append(
                                '<option name="id_barang" value="' + value
                                    .id + '"' + isselected + '>' + value.nama +
                                '</option>');
                        });
                    } else {
                        $.each(result.barang, function (key, value) {
                            if (data.id_barang == value.id_barang
                            ) {
                                isselected = 'selected';
                            } else {
                                isselected = '';
                            }
                            $("#id_barang").append(
                                '<option name="id_barang" value="' + value
                                    .id_barang + '"' + isselected + '>' + value.barang.nama +
                                '</option>');
                        });
                    }
                }
            });
            // Select Option 'dari'
            $.ajax({
                url: "/transaksi/fetch/project",
                type: "POST",
                data: {
                    id_barang: data.id_barang,
                    id_project: data.dari
                },
                dataType: 'json',
                success: function (result) {
                    $('#dari').html('<option value="" selected>None</option>');
                    const selected = data.id_barang;
                    $.each(result, function (key, value) {
                        if (data.dari == value.id_project) {
                            isselected = 'selected';
                        } else {
                            isselected = '';
                        }
                        $("#dari").append(
                            '<option value="' + value.id_project + '"' + isselected + '>' + value.project.nama + '</option>');
                    });
                }
            });

            // Select Option 'ke'
            $.ajax({
                url: "/transaksi/fetch/project",
                type: "POST",
                data: {

                },
                dataType: 'json',
                success: function (result) {
                    $('#ke').html('<option value="" selected>None</option>');
                    const selected = data.id_barang;
                    $.each(result, function (key, value) {
                        if (data.ke == value.id) {
                            isselected = 'selected';
                        } else {
                            isselected = '';
                        }
                        $("#ke").append(
                            '<option value="' + value.id + '"' + isselected + '>' + value.nama + '</option>');
                    });
                }
            });

            // Select Option Barang ketika 'dari' berubah
            $('#dari').on('change', function () {
                $.ajax({
                    url: "/transaksi/fetch",
                    type: "POST",
                    data: {
                        id_project: this.value,
                    },
                    dataType: 'json',
                    success: function (result) {
                        $('#id_barang').html('<option value="" selected>Select</option>');
                        const selected = document.getElementById('dari').value;
                        if (selected == '') {
                            $.each(result.barang, function (key, value) {
                                if (data.id_barang == value.id) {
                                    isselected = 'selected';
                                } else {
                                    isselected = '';
                                }
                                $("#id_barang").append(
                                    '<option name="id_barang" value="' + value
                                        .id + '"' + isselected + '>' + value.nama +
                                    '</option>');
                            });
                        } else {
                            $.each(result.barang, function (key, value) {
                                if (data.id_barang == value.id_barang
                                ) {
                                    isselected = 'selected';
                                } else {
                                    isselected = '';
                                }
                                $("#id_barang").append(
                                    '<option name="id_barang" value="' + value
                                        .id_barang + '"' + isselected + '>' + value.barang.nama +
                                    '</option>');
                            });
                        }
                    }
                });
            });    

            $('#title').html("Edit");
            $('#btnCreate').val("Update");
            $('#modalTambahData').modal('show');
            $('#id').val(data.id);
            // $('#tanggal').val(JSON.parse(data.created_at));
            function dateFormat(inputDate, format) {
                //parse the input date
                const date = new Date(inputDate);

                //extract the parts of the date
                const day = date.getDate();
                const month = date.getMonth() + 1;
                const year = date.getFullYear();

                //replace the month
                format = format.replace("MM", month.toString().padStart(2, "0"));

                //replace the year
                if (format.indexOf("yyyy") > -1) {
                    format = format.replace("yyyy", year.toString());
                } else if (format.indexOf("yy") > -1) {
                    format = format.replace("yy", year.toString().substr(2, 2));
                }

                //replace the day
                format = format.replace("dd", day.toString().padStart(2, "0"));

                return format;
            }
            // var dateStr = JSON.parse(data.created_at);
            var date = new Date(data.created_at);
            // console.log(dateFormat(date, 'dd-MM-yyyy'))
            $('#tanggal').val(dateFormat(date, 'yyyy-MM-dd'));
            $('#masuk').val(data.masuk);
            $('#keluar').val(data.keluar);
            $('#keterangan').val(data.keterangan);
            $('#remark').val(data.remark);
            //   $('#detail').val(data.detail);
        })
    });

    /*------------------------------------------
    --------------------------------------------
    Create Project
    --------------------------------------------
    --------------------------------------------*/
    $('#btnCreate').click(function (e) {
        e.preventDefault();
        $(this).html('Sending..');
        var tanggal = $('#tanggal').val();
        var id_barang = $('#id_barang').val();
        var masuk = $('#masuk').val();
        var keluar = $('#keluar').val();
        var dari = $('#dari').val();
        var ke = $('#ke').val();
        if (tanggal == '') {
            swal({
                title: 'Information',
                text: 'Tanggal cant empty',
                type: 'error'
            });
        }
        else if (id_barang == '') {
            swal({
                title: 'Information',
                text: 'Material name cant empty',
                type: 'error'
            });
        }
        else if (masuk == '') {
            swal({
                title: 'Information',
                text: 'Stock In cant empty',
                type: 'error'
            });
        }
        else if (keluar == '') {
            swal({
                title: 'Information',
                text: 'Stock Out cant empty',
                type: 'error'
            });
        } else if ($('#btnCreate').val() == 'Create') {
            swal({
                title: 'Are you sure?',
                text: "Created this data?",
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Create',
            }).then(function (result) {
                if (result.value) {
                    $.ajax({
                        data: $('#addTransaksi').serialize(),
                        url: "/transaksi",
                        type: "POST",
                        dataType: 'json',
                        success: function (data) {
                            swal({
                                title: 'Information',
                                text: "Data has been created",
                                type: 'success',
                                padding: '2em'
                            });
                            $('#addTransaksi').trigger("reset");
                            $('#modalTambahData').modal('hide');
                            table.draw();
                            table1.draw();

                        },
                        error: function (data) {
                            console.log('Error:', data);
                            $('#btnCreate').html('Save Changes');
                        }
                    });
                }
            })
        } else {
            swal({
                title: 'Are you sure?',
                text: "Update this data?",
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Update',
            }).then(function (result) {
                if (result.value) {
                    $.ajax({
                        data: $('#addTransaksi').serialize(),
                        url: "/transaksi/" + $("#id").val(),
                        type: "PUT",
                        dataType: 'json',
                        success: function (data) {
                            swal({
                                title: 'Information',
                                text: "Data has been updated",
                                type: 'success',
                                padding: '2em'
                            });
                            $('#addTransaksi').trigger("reset");
                            $('#modalTambahData').modal('hide');
                            table.draw();
                            table1.draw();

                        },
                        error: function (data) {
                            console.log('Error:', data);
                            $('#btnCreate').html('Save Changes');
                        }
                    });
                }
            });
        }

    });

    /*------------------------------------------
    --------------------------------------------
    Delete Project
    --------------------------------------------
    --------------------------------------------*/
    $('body').on('click', '.deleteProject', function () {

        var id = $(this).data("id");
        // confirm("Are you sure want to delete?");
        swal({
            title: 'Are you sure?',
            text: "Delete this data?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Delete',
        }).then(function (result) {
            if (result.value) {
                $.ajax({
                    type: "DELETE",
                    url: "project" + '/' + id,
                    success: function (data) {
                        swal({
                            title: 'Information',
                            text: "Data has been deleted",
                            type: 'success',
                            padding: '2em'
                        });
                        table.draw();
                        table1.draw();
                    },
                    error: function (data) {
                        console.log('Error:', data);
                    }
                });
            }
        });
    });

});