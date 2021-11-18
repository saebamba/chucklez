<template>
  <div>
    <div>
      <img alt="Vue logo" src="https://static3.srcdn.com/wordpress/wp-content/uploads/2020/03/DC-Comics-Logo.jpg?q=50&fit=crop&w=480&h=250&dpr=1.5" />
      <h2>{{ $auth.user.name }}</h2>
      <p>{{ $auth.user.email }}</p>
    </div>

    <div>
      <pre>{{ JSON.stringify($auth.user, null, 2) }}</pre>
    </div>
  </div>
</template>