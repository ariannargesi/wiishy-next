export async function addEvent(data: any) {
  console.log(data);
    const formData = new FormData();
    
    formData.append("name", data.name),
    formData.append("family", data.family),
    formData.append("gender", data.user_gender),
    formData.append("relationship", data.rel),
    formData.append("event_type", data.type);
    formData.append("event_date", data.date);
  

  const res = await fetch("/api/addnewevent", {
    method: "POST",
    body: formData,
  });

  if (res.ok) {
    const response = await res.json();
    return response;
  }

  return "Something went wrong";
}
