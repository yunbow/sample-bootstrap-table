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
            var rowData = {
                id: (new Date()).getTime(),
                name: $('#name').val(),
                age: $('#age').val(),
                gender: $('#gender').val()
            };
            var dataList = userTable.bootstrapTable('getData');
            userTable.bootstrapTable('insertRow', { index: dataList.length, row: rowData });

            $('#addModal').modal('hide');
            $('#name').val('');
            $('#age').val('');
            $('#gender').val('male');
        });

        $('#outputButton').on('click', function () {
            var dataList = userTable.bootstrapTable('getData');
            log('dataList=\n' + JSON.stringify(dataList));
        });

        $('#addModalButton').on('click', function () {
            $('#addModal').modal('show');
        });

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
        });
    });

})();