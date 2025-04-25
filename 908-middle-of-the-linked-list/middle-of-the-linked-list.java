/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode middleNode(ListNode head) {
         if(head.next==null){
            return head;
        }
        ListNode l=head;
        ListNode s=head;
        while(s!=null && s.next !=null){
            l=l.next;
            s=s.next.next;
        }
        return l;
    }
}