exports.home = (req, res) => {
    res.sendFile('index.html', { root: 'public' });
  };
  