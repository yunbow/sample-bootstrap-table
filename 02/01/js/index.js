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
                name: '',
                age: '',
                gender: 'male'
            };
            var dataList = userTable.bootstrapTable('getData');
            userTable.bootstrapTable('insertRow', { index: dataList.length, row: rowData });
        });

        $('#outputButton').on('click', function () {
            var dataList = userTable.bootstrapTable('getData');
            log('dataList=\n' + JSON.stringify(dataList));
        });

        function nameFormatter(value, row, index) {
            return '<input type="text" id="name_' + index + '" value="' + value + '">';
        }

        function ageFormatter(value, row, index) {
            return '<input type="text" id="age_' + index + '" value="' + value + '">';
        }

        function genderFormatter(value, row, index) {
            var htmlList = [];
            var optionValueList = ['male', 'femle'];
            htmlList.push('<select id="gender_' + index + '">');
            for (var i in optionValueList) {
                var optionValue = optionValueList[i];
                if (value === optionValue) {
                    selected = 'selected';
                } else {
                    selected = '';
                }
                htmlList.push('<option value="' + optionValue + '" ' + selected + '>' + optionValue + '</option>');
            }
            htmlList.push('</select>');
            return htmlList.join('');
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
                    title: 'Name',
                    formatter: nameFormatter
                },
                {
                    field: 'age',
                    title: 'Age',
                    formatter: ageFormatter
                },
                {
                    field: 'gender',
                    title: 'Gender',
                    formatter: genderFormatter
                }
            ]
        }).on('change', '[id^=name_]', function () {
            var id = $(this).attr('id');
            var index = parseInt(id.replace('name_', ''));
            var dataList = userTable.bootstrapTable('getData');
            dataList[index].name = $(this).val();
            userTable.bootstrapTable('updateRow', { index: index, row: dataList[index] });
    
        }).on('change', '[id^=age_]', function () {
            var id = $(this).attr('id');
            var index = parseInt(id.replace('age_', ''));
            var dataList = userTable.bootstrapTable('getData');
            dataList[index].age = $(this).val();
            userTable.bootstrapTable('updateRow', { index: index, row: dataList[index] });
    
        }).on('change', '[id^=gender_]', function () {
            var id = $(this).attr('id');
            var index = parseInt(id.replace('gender_', ''));
            var dataList = userTable.bootstrapTable('getData');
            dataList[index].gender = $(this).val();
            userTable.bootstrapTable('updateRow', { index: index, row: dataList[index] });
        });
    })


})();