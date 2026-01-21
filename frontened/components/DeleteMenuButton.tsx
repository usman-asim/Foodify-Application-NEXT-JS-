"use client";

import React, { useActionState } from "react";
import { Button } from "./ui/button";
import { Loader, Trash2 } from "lucide-react";
import { deleteMenuAction } from "@/action/delete_menu";

type Props = {
  id: string;
};

const DeleteMenuButton = ({ id }: Props) => {
  const [formState, action, isPending] = useActionState(
    deleteMenuAction.bind(null, id),
    { success: false },
  );

  return (
    <form action={action}>
      <Button
        type="submit"
        variant="ghost"
        size="icon"
        className="text-destructive"
        disabled={isPending}
      >
        {isPending ? <Loader className="h-4 w-4 animate-spin" /> : <Trash2 className="h-4 w-4" />}
      </Button>
    </form>
  );
};

export default DeleteMenuButton;
