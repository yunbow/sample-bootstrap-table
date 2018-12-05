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
                pid: 1,
                name: 'Bernard',
                age: '24',
                gender: 'male'
            },
            {
                id: 6,
                pid: 5,
                name: 'Cyrus',
                age: '31',
                gender: 'male'
            },
            {
                id: 7,
                pid: 6,
                name: 'Olive',
                age: '67',
                gender: 'female'
            },
            {
                id: 8,
                pid: 7,
                name: 'Jasmine',
                age: '55',
                gender: 'female'
            },
            {
                id: 9,
                pid: 8,
                name: 'Dominic',
                age: '25',
                gender: 'male'
            },
            {
                id: 10,
                pid: 8,
                name: 'Dolly',
                age: '33',
                gender: 'female'
            },
            {
                id: 11,
                pid: 8,
                name: 'Lucy',
                age: '38',
                gender: 'female'
            },
            {
                id: 12,
                pid: 7,
                name: 'Hilda',
                age: '25',
                gender: 'female'
            },
            {
                id: 13,
                pid: 7,
                name: 'Morgan',
                age: '27',
                gender: 'male'
            },
            {
                id: 14,
                pid: 1,
                name: 'Peter',
                age: '67',
                gender: 'male'
            },
            {
                id: 15,
                pid: 1,
                name: 'Raymond',
                age: '41',
                gender: 'male'
            },
            {
                id: 16,
                pid: 1,
                name: 'Ann',
                age: '25',
                gender: 'female'
            },
            {
                id: 17,
                pid: 1,
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
                pid: 2,
                name: 'Gregory',
                age: '55',
                gender: 'male'
            },
            {
                id: 21,
                pid: 3,
                name: 'Jack',
                age: '38',
                gender: 'male'
            },
            {
                id: 22,
                pid: 4,
                name: 'Rosa',
                age: '41',
                gender: 'female'
            }
        ];

        userTable.bootstrapTable({
            treeShowField: 'name',
            parentIdField: 'pid',
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