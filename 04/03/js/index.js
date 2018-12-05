(function () {

    $(function () {

        var userTable = $('#userTable');
        var genderValue = 'male';

        $('#genderSelect').on('click', function () {
            genderValue = $('#gender').val();
            setGender(true);
        });

        $('#genderUnSelect').on('click', function () {
            genderValue = $('#gender').val();
            setGender(false);
        });

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
        }).on('post-body.bs.table', function (data) {
            setGender(true);
        });

        function setGender(isChecked) {
            var dataList = userTable.bootstrapTable('getData');
            var idList = [];
            for (var i in dataList) {
                var data = dataList[i];
                if (data.gender === genderValue) {
                    idList.push(data.id);
                }
            }
            if (isChecked) {
                userTable.bootstrapTable('checkBy', { field: 'id', values: idList });
            } else {
                userTable.bootstrapTable('uncheckBy', { field: 'id', values: idList });
            }
        }
    });

})();