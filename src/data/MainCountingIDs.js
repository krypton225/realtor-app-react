const generateID = (function () {
    function* MainCountingIDGenerator(start = 1) {
        let count = start;

        while (true) {
            yield count++;
        }
    }

    function insertIDIntoData(GeneratorCounter, dataArr = []) {
        const counter = GeneratorCounter();

        dataArr.forEach((card) => {
            card.id = counter.next().value;
        });
    }

    return {
        insert: insertIDIntoData,
        counting: MainCountingIDGenerator
    }
})();

export default generateID;