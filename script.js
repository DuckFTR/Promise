'use strict'

class Storage {
    add(key, value) {

    }

    delete(key) {

    }

    update(key, value) {

    }

    get(key) {

    }
}

class LocalStorage extends Storage {

    add(key, value) {
        return new Promise(function (resolve, reject) {
            resolve(localStorage.setItem(key, value))
        });
    }

    delete(key) {
        return new Promise(function (resolve, reject) {
            resolve(localStorage.removeItem(key))
        })
    }

    update(key, value) {
        return new Promise(function (resolve, reject) {
            resolve(localStorage.setItem(key, value))
        })
    }

    get(key) {
        return new Promise(function (resolve, reject) {
            resolve(localStorage.getItem(key))
        })
    }
}

let store = new LocalStorage()

store.add("name", "Peter")
    .then(() => {
        console.log('addedd');
    })

store.add("surname", "Grey");

store.update("surname", "Finley")
    .then(() => {
        console.log('changed');
    });

store.get("surname")
    .then(
        (value) => console.log(value)
    )

store.delete('name')
    .then(() => console.log('deleted')
    )

store.get('name')
    .then(value => {
        console.log(value)
    })