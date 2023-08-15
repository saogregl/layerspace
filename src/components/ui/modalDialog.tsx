"usee client"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'

interface ModalDialogProps {
    title: string
    description: string
    isOpen: boolean
    onClose: () => void
    children?: React.ReactNode
}

export const ModalDialog: React.FC<ModalDialogProps> = ({
    title,
    description,
    isOpen,
    onClose,
    children,
}) => {
    const onChange = (open: boolean) => {
        if (!open) {
            onClose()
        }
    }

    return (
        <Dialog
            open={isOpen}
            onOpenChange={onChange}
        >
            <DialogContent
                aria-label={title}
            >
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>
                        {description}
                    </DialogDescription>
                </DialogHeader>
                <div>
                    {children}
                </div>
            </DialogContent>
        </Dialog>
    )



}