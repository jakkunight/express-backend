const { z } = require("zod");

const name_id = z.string().min(1);
const num_id = z.number().positive().int();
const quantity = z.number().int().nonnegative();
const email = z.string().email();
const row_record = z.record(z.union([ z.string(), z.number(), z.boolean() ]));

const user = z.object({
	name: z.string().min(1),
	email: z.string().email(),
	id: z.number().int().positive(),
	role_id: z.number().int().positive(),
	password: z.string().min(1)
});
const product = z.object({
	id: z.number().int().positive(),
	name: z.string().min(1),
	description: z.string().min(1),
	cost: z.number().nonnegative(),
	sell_price: z.number().nonnegative(),
	quantity: z.number().int().nonnegative()
});
const sold_product = product.extend({
	sell_id: z.number().int().positive()
}).omit({ cost: true });
const service = z.object({
	id: z.number().int().positive(),
	name: z.string().min(1),
	description: z.string().min(1),
	cost: z.number().nonnegative(),
	sell_price: z.number().nonnegative()
});
const sold_service = product.extend({
	sell_id: z.number().int().positive()
}).omit({ cost: true });
const system_log = z.object({
	id: z.number().int().positive(),
	user: z.string().min(1),
	registry: z.string().min(1),
	table_name: z.string().min(1),
	row_id: z.number().int().positive()
});

module.exports = {
	num_id,
	name_id,
	quantity,
	email,
	row_record,
	user,
	product,
	sold_product,
	service,
	sold_service,
	system_log
};
