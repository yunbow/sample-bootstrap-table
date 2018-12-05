(function () {

    $(function () {

        var userTable = $('#userTable');

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