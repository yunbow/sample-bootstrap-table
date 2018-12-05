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
            }
        ];

        userTable.bootstrapTable({
            treeShowField: 'name',
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

        $('#apply').on('click', function () {
            var lang = $('#language').val();
            var titleObj = null;

            if (lang === 'en-US') {
                titleObj = {
                    name: 'Name',
                    age: 'Age',
                    gender: 'Gender'
                };
            } else if (lang === 'ja-JP') {
                titleObj = {
                    name: '名前',
                    age: '年齢',
                    gender: '性別'
                };
            }

            userTable.bootstrapTable("changeLocale", lang);
            userTable.bootstrapTable("changeTitle", titleObj);
        });
    });

})();