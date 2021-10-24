import {
  InboxAdded as InboxAddedEvent,
  KeyAdded as KeyAddedEvent,
  Send as SendEvent
} from "../generated/Messaging/Messaging"
import { InboxAdded, KeyAdded, Send } from "../generated/schema"

export function handleInboxAdded(event: InboxAddedEvent): void {
  let entity = new InboxAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.name = event.params.name
  entity.description = event.params.description
  entity.condition_nftContract = event.params.condition.nftContract
  entity.condition_count = event.params.condition.count
  entity.save()
}

export function handleKeyAdded(event: KeyAddedEvent): void {
  let entity = new KeyAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.sender = event.params.sender
  entity.key = event.params.key
  entity.save()
}

export function handleSend(event: SendEvent): void {
  let entity = new Send(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.sender = event.params.sender
  entity.receiver = event.params.receiver
  entity.content = event.params.content
  entity.inboxName = event.params.inboxName
  entity.encrypted = event.params.encrypted
  entity.save()
}
