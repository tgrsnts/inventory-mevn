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
        ajax: "project",
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
            {data: 'DT_RowIndex', name: 'DT_RowIndex'},
            {data: 'nama', name: 'nama'},
            {data: 'action', name: 'action', orderable: false, searchable: false},
        ]
    });

    var table1 = $('.data-tableuser').DataTable({
        processing: true,
        serverSide: true,
        ajax: "project",
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
            {data: 'DT_RowIndex', name: 'DT_RowIndex'},
            {data: 'nama', name: 'nama'},
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
        $('#addUser').trigger("reset");
        $('#title').html("Create New Project");
        $('#modalTambahData').modal('show');
    });
      
    /*------------------------------------------
    --------------------------------------------
    Click to Edit Button
    --------------------------------------------
    --------------------------------------------*/
    $('body').on('click', '.editProject', function () {
      var id = $(this).data('id');
      $.get("project" +'/' + id +'/edit', function (data) {
          $('#title').html("Edit");
          $('#btnCreate').val("Update");
          $('#modalTambahData').modal('show');
          $('#id').val(data.id);
          $('#nama').val(data.nama);
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
        var nama = $('#nama').val();
        if (nama == '') {
            swal({
                title: 'Information',
                text: 'Name Project cant empty',
                type: 'error'
            });
        } 
        else if ($('#btnCreate').val() == 'Create'){
            $.ajax({
                data: $('#addUser').serialize(),
                url: "project",
                type: "POST",
                dataType: 'json',
                success: function (data) {
                  swal({
                      title: 'Information',
                      text: "Data has been created",
                      type: 'success',
                      padding: '2em'
                  });
                    $('#addUser').trigger("reset");
                    $('#modalTambahData').modal('hide');
                    table.draw();
                    table1.draw();
                 
                },
                error: function (data) {
                    if(data.status == 422){
                        // var errors = JSON.parse(data.responseText);
                        swal({
                            title: 'Information',
                            text: 'The nama project has already been taken.',
                            type: 'error',
                            padding: '2em'
                        });
                    }
                    
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
                        data: $('#addUser').serialize(),
                        url: "project",
                        type: "POST",
                        dataType: 'json',
                        success: function (data) {
                          swal({
                              title: 'Information',
                              text: "Data has been updated",
                              type: 'success',
                              padding: '2em'
                          });
                            $('#addUser').trigger("reset");
                            $('#modalTambahData').modal('hide');
                            table.draw();
                            table1.draw();
                         
                        },
                        error: function (data) {
                            if(data.status == 422){
                                // var errors = JSON.parse(data.responseText);
                                swal({
                                    title: 'Information',
                                    text: 'The nama project has already been taken.',
                                    type: 'error',
                                    padding: '2em'
                                });
                            }
                            
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
                    url: "project"+'/'+id,
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