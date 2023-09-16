import { plugin } from 'bun';

plugin({
  name: 'No op',
  setup(build) {
    build.onResolve({ filter: /\.js$/ }, async (args) => {
      return { path: args.path };
    });
  },
});
