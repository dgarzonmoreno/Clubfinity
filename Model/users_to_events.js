function Users_To_Events(username, event_id)
{
    this.username = username;
    this.event_id = event_id;
    return
    {
      getUsername: function()
      {
        return username;
      },
      getEventId: function()
      {
        return event_id;
      }
    }
}
