class TrieNode {
    constructor() {
        this.indices = [];
        this.children = {};
    }
    getAllIndices() {
        let cur = this;
        let res = [...cur.indices];
        if (Object.entries(cur.children).length > 0) {
            Object.values(cur.children).forEach(node => {
                res.push(...node.getAllIndices());
            })
        }
        return res;
    }
}

export class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    insert(word, ind) {
        let cur = this.root;
        for (let i = 0; i < word.length; ++i) {
            if (!cur.children[word[i]]) {
                cur.children[word[i]] = new TrieNode();
            }
            cur = cur.children[word[i]];
            if (i === word.length - 1) {
                cur.indices.push(ind);
            }
        }
    }
    findAllIndices(prefix) {
        let cur = this.root;
        let res = [];
        for (let i = 0; i < prefix.length; ++i) {
            if (cur.children[prefix[i]]) {
                cur = cur.children[prefix[i]];
            } else {
                return res;
            }
        }
        return cur.getAllIndices();
    }
}