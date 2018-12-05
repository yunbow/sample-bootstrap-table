(function () {

    $(function () {

        var userTable = $('#userTable');

        userTable.bootstrapTable({
            sidePagination: 'server',
            showRefresh: true,
            sortName: 'name',
            sortOrder: 'asc',
            totalField: 'total',
            dataField: 'list',
            pagination: true,
            pageSize: 5,
            pageList: [5, 10, 25, 50, 100],
            ajax: function (params) {
                $.ajax({
                    type: 'GET',
                    url: '../01_json/sample001.json',
                    data: {
                        limit: params.data.limit,
                        offset: params.data.offset,
                        order: params.data.order,
                        sort: params.data.sort
                    }
                }).done(function (data) {
                    params.success(data);

                }).fail(function (data) {
                    params.error(data);

                });
            },
            columns: [
                {
                    field: 'name',
                    title: 'Name',
                    sortable: true
                },
                {
                    field: 'age',
                    title: 'Age',
                    sortable: true
                },
                {
                    field: 'gender',
                    title: 'Gender',
                    sortable: true
                }
            ]
        });
    });

})();