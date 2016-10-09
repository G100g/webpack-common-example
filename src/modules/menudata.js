// Default entries
const entries = {
  'Home': 'index.html',
  'About': 'about.html',
};

export default {

  getEntries() {
    return entries;
  },

  addEntry(title, url) {
    entries[title] = url;
  },
  removeEntry(title) {
    delete entries[title];
  }
};
