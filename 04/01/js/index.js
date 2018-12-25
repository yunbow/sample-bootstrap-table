(function () {

    $(function () {

        var userTable = $('#userTable');

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
            {
                id: 3,
                name: 'Alan',
                age: '33',
                gender: 'male'
            },
            {
                id: 4,
                name: 'Monica',
                age: '27',
                gender: 'female'
            },
            {
                id: 5,
                name: 'Bernard',
                age: '24',
                gender: 'male'
            },
            {
                id: 6,
                name: 'Cyrus',
                age: '31',
                gender: 'male'
            },
            {
                id: 7,
                name: 'Olive',
                age: '67',
                gender: 'female'
            },
            {
                id: 8,
                name: 'Jasmine',
                age: '55',
                gender: 'female'
            },
            {
                id: 9,
                name: 'Dominic',
                age: '25',
                gender: 'male'
            },
            {
                id: 10,
                name: 'Dolly',
                age: '33',
                gender: 'female'
            },
            {
                id: 11,
                name: 'Lucy',
                age: '38',
                gender: 'female'
            },
            {
                id: 12,
                name: 'Hilda',
                age: '25',
                gender: 'female'
            },
            {
                id: 13,
                name: 'Morgan',
                age: '27',
                gender: 'male'
            },
            {
                id: 14,
                name: 'Peter',
                age: '67',
                gender: 'male'
            },
            {
                id: 15,
                name: 'Raymond',
                age: '41',
                gender: 'male'
            },
            {
                id: 16,
                name: 'Ann',
                age: '25',
                gender: 'female'
            },
            {
                id: 17,
                name: 'Cherie',
                age: '40',
                gender: 'female'
            },
            {
                id: 18,
                name: 'Eliza',
                age: '24',
                gender: 'female'
            },
            {
                id: 19,
                name: 'Flora',
                age: '31',
                gender: 'female'
            },
            {
                id: 20,
                name: 'Gregory',
                age: '55',
                gender: 'male'
            },
            {
                id: 21,
                name: 'Jack',
                age: '38',
                gender: 'male'
            },
            {
                id: 22,
                name: 'Rosa',
                age: '41',
                gender: 'female'
            }
        ];

        userTable.bootstrapTable({
            sidePagination: 'client',
            sortName: 'name',
            sortOrder: 'asc',
            pagination: true,
            pageSize: 5,
            pageList: [5, 10, 25, 50, 100],
            columns: [
                {
                    field: 'selected',
                    checkbox: true,
                    align: 'center'
                },
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

        }).on('page-change.bs.table', function (event, size) {
            log('[page-change.bs.table] page=' + size);

        }).on('pre-body.bs.table', function (data) {
            log('[pre-body.bs.table]');

        }).on('post-body.bs.table', function (data) {
            log('[post-body.bs.table]');

        }).on('post-header.bs.table', function () {
            log('[post-header.bs.table]');

        }).on('reset-view.bs.table', function () {
            log('[reset-view.bs.table]');
        });

        userTable.bootstrapTable('load', initDataList);
    });

})();