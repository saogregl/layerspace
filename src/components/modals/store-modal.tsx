"use client";
import { useStoreModal } from "@/hooks/use-store-modal";
import { ModalDialog } from "@/components/ui/modalDialog";
import { zodResolver } from "@hookform/resolvers/zod";

import * as z from "zod";
import { useForm } from "react-hook-form";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
    name: z.string({required_error: "O Nome é requerido"}).min(1).max(50),
})


export const StoreModal = () => {

    const storeModal = useStoreModal();

    const form = useForm<z.infer<typeof formSchema>>(
        {
            resolver: zodResolver(formSchema),
            defaultValues: {
                name: "",
            },
        }
    );

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        //TODO: Create Store
        console.log(data);
    }


    return (
        <ModalDialog
            title="Create new store"
            description="Add a new store to manage products and categories"
            isOpen={storeModal.isOpen}
            onClose={storeModal.onClose}
        >
            <div>
                <div className="space-y-4 py-2 pb-4">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field, fieldState }) => {
                                    return (
                                        <FormItem>
                                            <FormLabel>
                                                Name
                                            </FormLabel>
                                            <FormControl>
                                                <Input placeholder="Store Name" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )
                                }}
                            />
                            <div className="flex items-center pt-6 space-x-2 justify-end">
                                <Button variant="outline" onClick={storeModal.onClose}>Cancel</Button>
                                <Button type="submit">Create</Button>
                            </div>


                        </form>
                    </Form>
                </div>
            </div>
        </ModalDialog >
    )
}