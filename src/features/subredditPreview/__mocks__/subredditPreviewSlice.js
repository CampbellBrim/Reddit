const loadAllPreviews = jest.fn(() => {
  return Promise.resolve({
    // status: ``,
    // data: [],
    title: "this is a title",
    author: "someones name",
    post_hint: undefined,
    ups: 22,
    num_comments: 36,
  });
});

export default loadAllPreviews;
