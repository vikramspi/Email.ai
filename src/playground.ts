import { db } from "@/server/db";

await db.user.create({
    data: {
        emailAddress: 'test@gmail.com',
        firstName: 'Vikram',
        lastName: 'kanojiya',
    }
})

console.log('done')