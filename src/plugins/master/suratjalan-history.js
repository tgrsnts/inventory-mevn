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
        ajax: "/suratjalan/history",
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
        "pageLength": 10,

        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
            { data: 'delivery', name: 'delivery' },
            { data: 'kepada', name: 'kepada' },
            { data: 'project.nama', name: 'project.nama' },
            { data: 'no_sj', name: 'no_sj' },
            { data: 'created_at', name: 'created_at' },
            { data: 'no_sj', name: 'no_sj' },
            { data: 'action', name: 'action', orderable: false, searchable: false },
        ]
    });

    var table1 = $('.data-tableuser').DataTable({
        processing: true,
        serverSide: true,
        ajax: "/suratjalan/history",
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
        "pageLength": 10,

        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
            { data: 'delivery', name: 'delivery' },
            { data: 'kepada', name: 'kepada' },
            { data: 'id_project', name: 'id_project' },
            { data: 'no_sj', name: 'no_sj' },
            { data: 'created_at', name: 'created_at' },
            { data: 'no_sj', name: 'no_sj' },
            // {data: 'action', name: 'action', orderable: false, searchable: false},
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
        $('#addSuratJalan').trigger("reset");
        $('#title').html("Create New Surat Jalan");
        $('#modalTambahData').modal('show');
    });

    /*------------------------------------------
    --------------------------------------------
    Click to Edit Button
    --------------------------------------------
    --------------------------------------------*/
    $('body').on('click', '.editSuratJalan', function () {
        var id = $(this).data('id');
        $.get("/suratjalan/" + id + '/edit', function (data) {
            $('#title').html("Edit Surat Jalan");
            $('#btnCreate').val("Update");
            $('#modalTambahData').modal('show');
            $('#id').val(data.id);
            $('#delivery').val(data.delivery);
            $('#kepada').val(data.kepada);
            $('#no_sj').val(data.no_sj);
            $('#no_mobil').val(data.no_mobil);

            // Select Project          
            $.ajax({
                url: "/suratjalan/fetch/project",
                type: "POST",
                data: {

                },
                dataType: 'json',
                success: function (result) {
                    $('#id_project').html('<option value="" selected>Default</option>');
                    $.each(result, function (key, value) {
                        if (data.id_project == value.id) {
                            isselected = 'selected';
                        } else {
                            isselected = '';
                        }
                        $("#id_project").append(
                            '<option value="' + value.id + '"' + isselected + '>' + value.nama + '</option>');
                    });
                }
            });

            // Select Barang
            $.get("/suratjalan/" + data.id + "/barang", function (data) {
                $('.barang-container').html('');
                $.each(data, function (index, valuesurat) {
                    if (index == 0) {
                        button = `<button type="button" class="btn btn-primary btn-sm btn-add-barang"
                        style="border-top-left-radius:0;border-bottom-left-radius:0">Add
                    </button>`;
                    } else {
                        button = `<button type="button" class="btn btn-sm btn-danger btn-delete-barang" style="border-top-left-radius:0;border-bottom-left-radius:0"                                                            >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="feather feather-trash-2">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path
                            d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                        </path>
                        <line x1="10" y1="11" x2="10"
                            y2="17"></line>
                        <line x1="14" y1="11" x2="14"
                            y2="17"></line>
                        </svg>
                    </button>`;
                    }
                    if (!valuesurat.remark) {
                        valuesurat.remark = '';
                    }
                    $('.barang-container').append(`<div class="row">
                        <div class="col">
                            <label for="floatingInput6">Barang</label>
                        </div>
                        <div class="col d-flex justify-content-end ">

                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <select name="id_barang[]" class="form-control id_barang"
                                id="id_barang`+ index + `">
                                <option>
                                    Select
                                </option>                                                                                         
                            </select>
                        </div>
                        <div class="col-3">
                            <input type="number" name="keluar[]" class="form-control"
                                placeholder="Qty" value="`+ valuesurat.keluar + `">
                        </div>
                        <div class="col input-group">
                            <input value="`+ valuesurat.remark + `" name="remark[]" type="text"
                                class="form-control" id="remark" placeholder="remark">
                            `+ button + `
                        </div>
                    </div>`);

                    $.ajax({
                        url: "/suratjalan/barang",
                        type: "GET",
                        data: {

                        },
                        dataType: 'json',
                        success: function (result) {
                            $('#id_barang' + index).html('<option value="" selected>Select</option>');
                            $.each(result, function (key, value) {
                                if (valuesurat.id_barang == value.id) {
                                    isselected = 'selected';
                                } else {
                                    isselected = '';
                                }
                                $('#id_barang' + index).append('<option value="' + value.id + '"' + isselected + '>' + value.nama + '</option>');
                            });
                        }
                    });
                });
                // $.get("/suratjalan/barang", function (data) {
                //     $('#id_barang0').html('<option value="" selected>Select</option>');
                //     $.each(data, function(value){                       
                //         $('#id_barang0').append('<option value="' + value.id + '"' + isselected + '>' + value.nama + '</option>');
                //     });
                // });


            });
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
        if ($('#delivery').val() == '') {
            swal({
                title: 'Information',
                text: "Delivery can't be empty",
                type: 'error'
            });
        } else if ($('#kepada').val() == '') {
            swal({
                title: 'Information',
                text: "To can't be empty",
                type: 'error'
            });
        } else if ($('#id_project').val() == '') {
            swal({
                title: 'Information',
                text: "Project Name must be selected",
                type: 'error'
            });
        } else if ($('#no_sj').val() == '') {
            swal({
                title: 'Information',
                text: "No SJ can't be empty",
                type: 'error'
            });
        } else if ($('#no_mobil').val() == '') {
            swal({
                title: 'Information',
                text: "No Mobil can't be empty",
                type: 'error'
            });
        } else if ($('#btnCreate').val() == 'Create') {
            $.ajax({
                data: $('#addSuratJalan').serialize(),
                url: "/suratjalan",
                type: "POST",
                dataType: 'json',
                success: function (data) {
                    swal({
                        title: 'Information',
                        text: "Data has been created",
                        type: 'success',
                        padding: '2em'
                    });
                    $('#addSuratJalan').trigger("reset");
                    $('#modalTambahData').modal('hide');
                    table.draw();
                    table1.draw();

                },
                error: function (data) {
                    console.log('Error:', data);
                    $('#btnCreate').html('Save Changes');
                }
            });
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
                        data: $('#addSuratJalan').serialize(),
                        url: "/suratjalan_surat/" + $('#id').val(),
                        type: "PUT",
                        dataType: 'json',
                        success: function (data) {
                            swal({
                                title: 'Information',
                                text: data.success,
                                type: 'success',
                                padding: '2em'
                            });
                            $('#addSuratJalan').trigger("reset");
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
                    url: "project/" + id,
                    success: function (data) {
                        swal({
                            title: 'Information',
                            text: "Data has been deleted",
                            type: 'success',
                            padding: '2em'
                        });
                        table.draw();
                    },
                    error: function (data) {
                        console.log('Error:', data);
                    }
                });
            }
        });
    });

});