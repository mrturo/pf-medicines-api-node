select
  st.msto_id,
  st.msto_date,
  st.msto_quantity,
  st.mbpr_id,
  st.user_id
from
  public.pf_med_stock st
order by
  st.msto_id asc;