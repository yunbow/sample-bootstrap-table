(function () {

    $(function () {

        var userTable = $('#userTable');

        $('#deleteButton').on('click', function () {
            var idList = $.map(userTable.bootstrapTable('getSelections'), function (row) {
                return row.id;
            });
            userTable.bootstrapTable('remove', { field: 'id', values: idList });
        });

        $('#addButton').on('click', function () {
            saveRowData(true);
        });

        $('#updateButton').on('click', function () {
            saveRowData(false);
        });

        $('#outputButton').on('click', function () {
            var dataList = userTable.bootstrapTable('getData');
            log('dataList=\n' + JSON.stringify(dataList));
        });

        $('#addModalButton').on('click', function () {
            displayEditModal(true);
        });

        function displayEditModal(isAdd, rowIndex, rowData) {
            if (isAdd) {
                $('#editModalTitile').text('Add user');
                $('#addButton').show();
                $('#updateButton').hide();
            } else {
                $('#editModalTitile').text('Update user');
                $('#addButton').hide();
                $('#updateButton').show();
                $('#rowIndex').val(rowIndex);
                $('#rowId').val(rowData.id);
                $('#name').val(rowData.name);
                $('#age').val(rowData.age);
                $('#gender').val(rowData.gender);
            }
            $('#editModal').modal('show');
        }

        function saveRowData(isAdd) {
            var rowId = $('#rowId').val();
            var rowData = {
                id: rowId ? rowId : (new Date()).getTime(),
                name: $('#name').val(),
                age: $('#age').val(),
                gender: $('#gender').val()
            };
            if (isAdd) {
                var dataList = userTable.bootstrapTable('getData');
                userTable.bootstrapTable('insertRow', { index: dataList.length, row: rowData });
            } else {
                var rowIndex = $('#rowIndex').val();
                userTable.bootstrapTable('updateRow', { index: rowIndex, row: rowData });
            }
            $('#editModal').modal('hide');
            $('#rowId').val('');
            $('#rowIndex').val('');
            $('#name').val('');
            $('#age').val('');
            $('#gender').val('male');
        }

        var initDataList = [
            {
                id: 1,
                name: 'Jiro Tanaka',
                age: '25',
                gender: 'male'
            },
            {
                id: 2,
                name: 'Hanako Yamada',
                age: '40',
                gender: 'female'
            },
        ];

        userTable.bootstrapTable({
            toolbar: '#toolbar',
            data: initDataList,
            columns: [
                {
                    field: 'selected',
                    checkbox: true,
                    align: 'center'
                },
                {
                    field: 'name',
                    title: 'Name'
                },
                {
                    field: 'age',
                    title: 'Age'
                },
                {
                    field: 'gender',
                    title: 'Gender'
                }
            ]
        }).on('click-row.bs.table', function (event, row, element, field) {
            if (field !== 'state') {
                displayEditModal(false, element.index(), row);
            }
        });
    });

})();