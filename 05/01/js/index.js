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
            filterControl: true,
            filterShowClear: true,
            data: initDataList,
            columns: [
                {
                    field: 'name',
                    title: 'Name',
                    filterControl: 'input'
                },
                {
                    field: 'age',
                    title: 'Age',
                    filterControl: 'select'
                },
                {
                    field: 'gender',
                    title: 'Gender',
                    filterControl: 'select'
                }
            ]
        });
    });

})();