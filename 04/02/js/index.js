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
        }).on('click-row.bs.table', function (element, row) {
            log('[click-row.bs.table] row=' + JSON.stringify(row));

        }).on('dbl-click-row.bs.table', function (element, row) {
            log('[dbl-click-row.bs.table] row=' + JSON.stringify(row));

        }).on('click-cell.bs.table', function (element, field, value) {
            log('[click-cell.bs.table] field=' + field + ', value=' + value);

        }).on('dbl-click-cell.bs.table', function (element, field, value) {
            log('[dbl-click-cell.bs.table] field=' + field + ', value=' + value);

        }).on('sort.bs.table', function (element, name, order) {
            log('[sort.bs.table] name=' + name + ', order=' + order);

        }).on('check.bs.table', function (element, row) {
            log('[check.bs.table] row=' + JSON.stringify(row));

        }).on('uncheck.bs.table', function (element, row) {
            log('[uncheck.bs.table] row=' + JSON.stringify(row));

        }).on('check-all.bs.table', function () {
            log('[check-all.bs.table]');

        }).on('uncheck-all.bs.table', function () {
            log('[uncheck-all.bs.table]');

        }).on('load-success.bs.table', function (event) {
            log('[load-success.bs.table]');

        }).on('load-error.bs.table', function (event) {
            log('[load-error.bs.table]');

        }).on('page-change.bs.table', function (event, size) {
            log('[page-change.bs.table] page=' + size);

        }).on('pre-body.bs.table', function (data) {
            log('[pre-body.bs.table]');

        }).on('post-body.bs.table', function (data) {
            log('[post-body.bs.table]');

        }).on('post-header.bs.table', function () {
            log('[post-header.bs.table]');

        }).on('refresh-options.bs.table', function (options) {
            log('[refresh-options.bs.table] options=' + JSON.stringify(options));

        }).on('reset-view.bs.table', function () {
            log('[reset-view.bs.table]');
        });
    });

})();