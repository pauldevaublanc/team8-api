'use strict';

/**
 * Court.js controller
 *
 * @description: A set of functions called "actions" for managing `Court`.
 */

module.exports = {

  /**
   * Retrieve court records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.court.search(ctx.query);
    } else {
      return strapi.services.court.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a court record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.court.fetch(ctx.params);
  },

  /**
   * Count court records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.court.count(ctx.query);
  },

  /**
   * Create a/an court record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.court.add(ctx.request.body);
  },

  /**
   * Update a/an court record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.court.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an court record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.court.remove(ctx.params);
  }
};
