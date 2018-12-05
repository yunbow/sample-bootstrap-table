(function () {

    $(function () {

        var userTable = $('#userTable');

        $('#deleteButton').on('click', function () {
            var idList = $.map(userTable.bootstrapTable('getSelections'), function (row) {
                return row.id;
            });
            userTable.bootstrapTable('remove', { field: 'id', values: idList });
        });

        $('#outputButton').on('click', function () {
            var dataList = userTable.bootstrapTable('getData');
            log('dataList=\n' + JSON.stringify(dataList));
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